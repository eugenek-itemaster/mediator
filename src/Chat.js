class Chat {
    members = [];

    constructor() {

    }

    add(member) {
        this.members[member.name] = member;
        member.chat = this;
    }

    send(message, from) {
        let to = false;
        let receiver = false;

        if (message.indexOf('@') !== -1) {
            receiver = message.substring(0, message.indexOf(' '));
            let receiverKey = receiver.replace('@', '');

            if (this.members[receiverKey] !== undefined) {
                to = this.members[receiverKey];
            }
        }

        if (!to) {
            Object.keys(this.members).forEach((key) => {
                let member = this.members[key];
                member.receive(message, from);
            });
        } else {
            to.receive(message.replace(receiver, '').trim(), from);
            from.receive('To ' + to.name + ': ' + message.replace(receiver, '').trim(), from);
        }
    }
}

export default Chat;