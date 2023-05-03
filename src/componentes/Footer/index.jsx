import "./Footer.css"


const Footer =() => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/manuelricardo.monsalve">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://github.com/MonsalveR95">
                <img src="/img/github1.png" alt="Github" />
            </a>
            <a href="https://www.instagram.com/manuelmonsalve34/">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <a href="/pdf/Curriculum Manuel Monsalve.pdf" className="hdv"><strong>Desarrollado por Manuel Monsalve</strong></a>
    </footer>
}

export default Footer