const player = {
    playlist: document.querySelector(".playlist"), // _ --> private
    songTitle: document.querySelector(".song-title"),
    audio: document.querySelector("#audio"),
    togglePlayBtn: document.querySelector(".btn-toggle-play"),
    playIcon: document.querySelector("#play-icon"),
    nextBtn: document.querySelector(".btn-next"),
    prevBtn: document.querySelector(".btn-prev"),

    // Mảng chứa các bài hát
    songs: [
        {
            id: 1,
            name: "Sóng Gió",
            path: "./musics/Sóng Gió.mp3",
            artist: "J97",
        },
        {
            id: 2,
            name: "NÉT",
            path: "./musics/NÉT.mp3",
            artist: "Nguyễn B",
        },
        {
            id: 3,
            name: "Yêu Em Dài Lâu - Yêu 5",
            path: "./musics/Yêu Em Dài Lâu - Yêu 5.mp3",
            artist: "Nguyễn C",
        },
    ],

    // Chỉ mục song hiện tại
    currentIndex: 0,

    // Lấy song hiện tại
    getCurrentSong() {
        return this.songs[this.currentIndex];
    },

    // Hàm lấy bài nhạc hiện tại
    loadCurrentSong() {
        const currentSong = this.getCurrentSong();
        this.songTitle.textContent = currentSong.name;
        this.audio.src = currentSong.path;
    },

    // Tăng/giảm index bài nhạc
    handlePrevOrNext(step) {
        this.currentIndex =
            (this.currentIndex + step + this.songs.length) % this.songs.length;

        this.loadCurrentSong(); // Load lại thông tin song
        player.playIcon.classList.replace("fa-play", "fa-pause");
        this.audio.play();
    },

    init() {
        // Lay bài nhạc hiện tại
        this.loadCurrentSong();

        /* Xử lý sự kiện nút PLAY  */

        // Xử lý click button play/pause
        this.togglePlayBtn.addEventListener("click", () => {
            // Nếu đang pause thì play
            if (this.audio.paused) {
                this.audio.play();
            }

            // Đang play thì pause
            else {
                this.audio.pause();
            }
        });

        // Đổi icon thành pause khi song.play
        this.audio.addEventListener("play", () => {
            player.playIcon.classList.replace("fa-play", "fa-pause");
        });

        this.audio.addEventListener("pause", () => {
            player.playIcon.classList.replace("fa-pause", "fa-play");
        });

        /* Xử lý sự kiện nút NEXT/PREV */

        // Nút NEXT
        this.nextBtn.addEventListener("click", () => {
            // Tăng index lên 1 đơn vị
            this.handlePrevOrNext(1);
        }),
            // Nút PREV
            this.prevBtn.addEventListener("click", () => {
                // Giảm index lên 1 đơn vị
                this.handlePrevOrNext(-1);
            }),
            // Render danh sách songs
            this.render();
    },
    render() {
        // 1. Render danh sách các bài hát từ "songs"
        // 2. Sử dụng innerHTML
        const html = this.songs
            .map((song) => {
                return `
                    <div class="song">
                        <div
                            class="thumb"
                            style="
                                background-image: url('https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg');
                            "
                        ></div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.artist}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                `;
            })
            .join("");
        this.playlist.innerHTML = html;
    },
};

// Khởi tạo player
player.init();
