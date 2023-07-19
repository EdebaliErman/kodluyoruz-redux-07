import { createSlice } from "@reduxjs/toolkit";
import data from "../Data/data";



export const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        items: data,
        selected: [],
        point: 50,
        statusCard:"normal"

    },

    reducers: {
        randomCard: (state) => {
            for (let i = state.items.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [state.items[i], state.items[j]] = [state.items[j], state.items[i]];
            }
        },

        opened: (state, actions) => {
            const card = state.items.find(c => c.id === actions.payload)
            card.status = true

        },

        selectedItem: (state, actions) => {
            state.selected = [...state.selected, actions.payload]
            if (state.selected.length > 2) {
                state.selected = []

            }
        },
        completed: (state) => {
            
            if (state.selected.length === 2) {
                let name1 = state.selected[0].name
                let name2 = state.selected[1].name
                
                if (name1 === name2) {
                    state.items.map(n => {
                        if (n.name === name1) {
                            n.completed = true
                        }
                    })
                    state.point += 50
                    console.log(state.point)
                } else {
                    state.items.map(item => item.status = false)
                    state.point -= 10
                }

            }



        },
        reload: (state) => {
            for (let i = state.items.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [state.items[i], state.items[j]] = [state.items[j], state.items[i]];
            }
            state.point = 50
            state.items.map((item) => {
                item.completed = false
                item.status = false
            })
            state.statusCard = "normal"
        },
        winCard: (state) => {

            const win = state.items.every(item => item.completed === true)

            if (win) {
                state.statusCard = "win"
            }
            if (state.point < 0) {
                state.statusCard = "lose"
            }
        }

    }
})

export const selectCards = state => state.cards.items
export const selectPoint = state => state.cards.point
export const selectCardItem = state => state.cards.selected
export const selectCompere = state => state.cards.compere
export const selectCardStatus = state => state.cards.statusCard

export const { opened, randomCard, selectedItem, completed, reload, winCard } = cardSlice.actions
export default cardSlice.reducer