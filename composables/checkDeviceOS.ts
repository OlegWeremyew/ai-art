export const checkDeviceOS = (): ReturnType => ({
  isDesktop: !(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)),
  isAndroidOS: (/Android/i.test(navigator.userAgent)),
})

type ReturnType = {
  isDesktop: boolean
  isAndroidOS: boolean
}
