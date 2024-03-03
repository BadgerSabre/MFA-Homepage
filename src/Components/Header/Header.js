import './Header.css'

export default function Header() {
    return (
        <div>
            <h1 id='header'>Hello World</h1>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/About'>About the Club</a>
                </li>
                <li>
                    <a href='/Coaches'>Our Coaches</a>
                </li>
                <li>
                    <a href='/Sport'>The Sport</a>
                </li>
                <li>
                    <a href='/FAQ'>FAQ</a>
                </li>
                <li>
                    <a href='/Policies'>Covid Policies</a>
                </li>
                <li>
                    <a href='/Calendar'>Calendar</a>
                </li>
            </ul>
        </div>
    )
}