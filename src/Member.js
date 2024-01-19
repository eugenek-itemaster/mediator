class Member {
    name;
    chat;
    elementOutput;
    elementInput;

    constructor(name) {
        this.name = name;

        this.visible();
    }

    send() {
        let message = this.elementInput.value;
        if (message) {
            this.chat.send(message, this);
            this.elementInput.value = '';
        }
    }

    receive(message, from) {
        this.elementOutput.value = (this.elementOutput.value ? (this.elementOutput.value + from.name + ': ' + message) : (from.name + ': ' + message)) + '\r\n';
    }

    visible(member) {
        let container = document.createElement("div");
        container.className = 'card'
        document.querySelector('#app').appendChild(container);

        let header = document.createElement("h5");
        header.className = 'card-header';
        header.innerText = this.name;
        container.appendChild(header);

        let body = document.createElement("div");
        body.className = 'card-body';
        container.appendChild(body);

        let messages = document.createElement("textarea");
        messages.classList.add('form-control', 'mb-4', 'chat');
        body.appendChild(messages);

        let inputContainer = document.createElement("div");
        inputContainer.classList.add('input-group', 'mb-4');
        body.appendChild(inputContainer);

        let inputMessage = document.createElement("input");
        inputMessage.setAttribute('type', 'text');
        inputMessage.className = 'form-control';
        inputContainer.appendChild(inputMessage);

        let sendButton = document.createElement("button");
        sendButton.classList.add('btn', 'btn-success');
        sendButton.innerText = 'Send';
        inputContainer.appendChild(sendButton);

        this.elementInput = inputMessage;
        this.elementOutput = messages;

        sendButton.onclick = () => {
            this.send();
        };

        inputMessage.onkeyup = (e) => {
            if (e.keyCode === 13) {
                this.send();
            }
        };
    }
}

export default Member;