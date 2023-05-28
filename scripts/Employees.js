import { getEmployees , getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders();

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "employee") {
            let employeeId = parseInt(itemClicked.dataset.id)
            let x = 0
            let employeeName = { name: "" }
            for (const employee of employees) {
                for (const order of orders) {
                    if (employee.id === employeeId) {
                        if (order.employeeId === employeeId) {
                            x++
                            employeeName.name = employee.name
                        } else if (order.employeeId !== employeeId) {
                            employeeName.name = employee.name
                        }
                    }
                }
            }
            window.alert(`${employeeName.name} has sold ${x} products.`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}"
                data-name="${employee.name}">
        ${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

