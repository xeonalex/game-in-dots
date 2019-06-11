export default {
    state: {
        playerName: '',
        mode: null,
        isActive: false,
        isGameStarted: false,
        needGameInit: false,
    },
    effects: {
        async setGameSettings(payload, rootState){
            this.set(payload);
        },
        async setGameWinner(payload, rootState){
            this.setWinner(payload);
        },
        async offGameInitFlag(payload, rootState){
            this.offInitFlag();
        },
    },
    reducers: {
        set(state, payload){
            return {
                ...state,
                ...payload,
                needGameInit: true,
            }
        },
        setWinner(state, payload){
            return {
                ...state,
                winner: payload,
                isActive: false
            }
        },
        offInitFlag(state, payload){
            return {
                ...state,
                isGameStarted: true,
                isActive: true,
                needGameInit: false,
            }
        },
    }
}