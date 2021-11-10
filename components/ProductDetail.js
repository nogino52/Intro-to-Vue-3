app.component('product-detail', {
    props: {
        detail: {
            type: String,
            required: true
        }
    },
    template: 
    /* html */
    `<div>
        {{detail}}
    </div>`
})