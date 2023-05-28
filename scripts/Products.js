import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "product") {
            let productId = parseInt(itemClicked.dataset.id)
            for (const product of products) {
                if ( productId === product.id) {
                    window.alert(`${product.name} cost $${product.price}`)
                }
            }
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-id="${product.id}"
                data-type="product">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

