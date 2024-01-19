import Chat from "./Chat";
import Member from "./Member";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'

let chat = new Chat();

document.getElementById('add-member').onclick = () => {
    setMember();
}

document.getElementById('member').onkeyup = (e) => {
    if (e.keyCode === 13) {
        setMember();
    }
}

function setMember(){
    let name = document.getElementById('member').value;

    chat.add(new Member(name));

    document.getElementById('member').value = '';
}