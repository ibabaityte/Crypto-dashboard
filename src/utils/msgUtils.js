class Msg {
    static SubMsg = new Msg("subscribe");
    static UnsubMsg = new Msg("unsubscribe");

    constructor(name) {
        this.name = name;
    }

    static getMsgJson = (msg, pair) => {
        return JSON.stringify({
            type: msg.name,
            product_ids: [pair],
            channels: ["ticker"]
        });
    };
}

export {Msg}