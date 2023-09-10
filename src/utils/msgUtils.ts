export default class Msg {
    static SubMsg: Msg = new Msg("subscribe");
    static UnsubMsg: Msg = new Msg("unsubscribe");
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    static getMsgJson = (msg: Msg, pair: string) => {
        return JSON.stringify({
            type: msg.getName(),
            product_ids: [pair],
            channels: ["ticker"]
        });
    };
}