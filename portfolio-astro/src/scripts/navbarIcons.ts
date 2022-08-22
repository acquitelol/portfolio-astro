interface navbarItem {
    name: string,
    url: string,
    image: string
}

const navbarIcons: navbarItem[] = [
    {
        name: "github",
        url: "https://github.com/acquitelol",
        image: './github.png'
    },
    {
        name: "youtube",
        url: "https://youtube.com/c/acquite",
        image: './youtube.png'
    }
]

export default navbarIcons;