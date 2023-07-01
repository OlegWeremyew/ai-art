import {defineStore} from 'pinia'
import {instance} from "~/composables/api";
import {array} from "~/composables/constants";

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isShowModal: false,
    isShowLoading: false,
    activeImage: {} as ImageType,
    images: [] as ImageType[],
    searchValue: '',
    limit: 16,
    page: 1,
    isShowClipboardPromptCopy: false,
    hint: '',
    timeout: null as any
  }),
  actions: {
    setModalVisibilityAction(status: boolean) {
      this.isShowModal = status

      if (status) {
        window.document.body.style.overflowY = 'hidden'
        return
      }

      window.document.body.style.overflowY = 'auto'
    },
    setActiveImage(image: ImageType) {
      this.activeImage = image
    },
    setSearchValue(search: string) {
      this.searchValue = search
    },
    setImagesList(images: ImageType[]) {
      this.images = images
    },
    setClipboardPromptDataVisibility(hint: string) {
      if (this.timeout && this.hint === hint) {
        return
      }

      this.isShowClipboardPromptCopy = true
      this.hint = hint

      this.timeout = setTimeout(() => {
        this.isShowClipboardPromptCopy = false
        this.timeout = null
      }, 2000)

    },
    changeLimitValue() {
      this.page += 1
    },
    async getImgFromServer() {
      try {
        this.isShowLoading = true

        const {data} = await instance.get<ImageListType>('', {
          params: {
            prompt: this.searchValue,
            limit: this.limit,
            page: 1,
          }
        })

        //this.setImagesList([...data])
        this.setImagesList([...this.images, ...array])
      } catch (e: any) {
        console.log(e.message)
        this.setImagesList([...array])
      } finally {
        this.isShowLoading = false
      }

    },
    async updateImagesList() {
      try {
        this.isShowLoading = true

        const {data} = await instance.get<ImageListType>('', {
          params: {
            prompt: this.searchValue,
            limit: this.limit,
            page: this.page,
          }
        })

        //this.setImagesList([...this.images, ...data])
        this.setImagesList([...this.images, ...array])

      } catch (e: any) {
        console.log(e.message)
        this.setImagesList([...this.images])
      } finally {
        this.isShowLoading = false
      }
    },
  },
})

export type ImageListType = {
  current_page: number
  total_elements: number
  limit: number
  status: number
  total_pages: any
  data: ImageType[]
}

export type ImageType = {
  timestamp: number,
  user_id: string,
  user_type: string,
  service: string,
  request_id: string,
  image_url: string,
  prompt: string,
  original_prompt: string,
  style: string
  model: string
  original_image_url: any
  like_user: boolean
  like_manager: boolean
  like_count: number,
  negative_prompt: string
  original_negative_prompt: string
}
