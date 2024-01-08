
type Video = {
  videoId: ReturnType<Crypto["randomUUID"]>, 
  title: string 
}

interface ThirdPartyYoutubeLib {
  listVideos(): Video[]
  getVideoInfo(id: ReturnType<Crypto["randomUUID"]>): Video
  downloadVideo(): void
}

class ThirdPartyYoutube implements ThirdPartyYoutubeLib {
  listVideos() {
    console.log("Get list video from third party youtube video")

    return [
      { videoId: crypto.randomUUID(), title: "UEFA Chamion League" }
    ]
  }

  getVideoInfo(id: ReturnType<Crypto["randomUUID"]>) {
    console.log(`Detail of video (${id})`)

    return {
      videoId: id,
      title: "Rock am Ring 2024"
    }
  }

  downloadVideo(): void {
    console.log("Downloading video")
  }
}

class CachedYoutube extends ThirdPartyYoutube {
  cacheListVideo!: Video[]
  cacheVideo!: Video
  isDownloaded = false

  constructor(public service: ThirdPartyYoutubeLib) {
    super()
  }

  listVideos() {
    if (!this.cacheListVideo.length) {
      this.cacheListVideo = this.service.listVideos()
    }

    return this.cacheListVideo
  }

  getVideoInfo(id: ReturnType<Crypto["randomUUID"]>) {
    if (!this.cacheVideo) {
      this.cacheVideo = this.service.getVideoInfo(id)
    }

    return this.cacheVideo
  }

  downloadVideo(): void {
    if (!this.isDownloaded) {
      this.isDownloaded = true
      this.service.downloadVideo()
    }
  }
}

class YoutubeManager {
  constructor(
    public service: ThirdPartyYoutubeLib
  ) {}

  renderVideoPage(id: ReturnType<Crypto["randomUUID"]>) {
    let info = this.service.getVideoInfo(id)
    
    console.log("Vide detail: ", info)
  }

  renderListPanel() {
    let lists = this.service.listVideos()

    console.log("Videos: ", lists)
  }

  reactOnUserInput() {
    this.renderVideoPage(crypto.randomUUID())
    this.renderListPanel()
  }
}

class Application {
  main() {
    let aYoutubeService = new ThirdPartyYoutube()
    let aYoutubeProxy = new CachedYoutube(aYoutubeService)

    let manager = new YoutubeManager(aYoutubeProxy)

    manager.reactOnUserInput()
  }
}

const app = new Application()
app.main()
app.main()
app.main()