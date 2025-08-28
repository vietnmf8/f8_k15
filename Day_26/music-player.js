const player = {
    // Mảng chứa các bài hát
    _songs: [
        {
            id: 1,
            name: "Kho Báu (with Rhymastic)",
            path: "./musics/Kho Báu (with Rhymastic).mp3",
            artist: "Nguyễn A",
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
    init() {
        // Task 1
        // Task 2
        // Task ...

        // Render danh sách songs
        this.render();
    },
    render() {
        // 1. Render danh sách các bài hát từ "_songs"
        // 2. Sử dụng innerHTML
        const html = this._songs.map((song) => {
            return `<div class="song">
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
                </div>`
        }).join("");

        const playlist = document.querySelector(".playlist");
        playlist.innerHTML = html
    
    },
};

// Khởi tạo player
player.init();





