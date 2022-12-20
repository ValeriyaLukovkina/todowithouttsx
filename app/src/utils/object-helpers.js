export let updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    debugger;
    return items.map((elem) => {
        if (elem[objPropName] === itemId) {
            return { ...elem, ...newObjProps }
        }
        return elem
    })
}

export let updateObjectInArrayWithExtra = (items, itemId, itemExtraId, objPropName, newObjProps) => {
    return items.map((elem) => {
        if (elem[objPropName] === itemId) {
            let allSubtaskComplete = false
            const sub = elem.subtask.map((sub) => {
                if (sub[objPropName] === itemExtraId) {
                    return {
                        ...sub, ...newObjProps
                        // subtask: [...elem[extra], ...newObjProps], 
                    }
                } 
                if (!sub.complete) {
                    allSubtaskComplete = true
                }
                    return sub
            })
            if (allSubtaskComplete) {
                return {...elem, 
                    subtask: [...sub]}
            }
            return {...elem, ...newObjProps,
                subtask: [...sub]}
        }
        return elem
    })
}

export let updateAllSubtasks = (items, itemId, objPropName, newObjProps) => {
    return items.map((elem) => {
        if (elem[objPropName] === itemId) {

            const sub = elem.subtask.map((sub) => {
                    return {
                        ...sub, ...newObjProps
                        // subtask: [...elem[extra], ...newObjProps], 
                    }
            })
            return {...elem, 
            subtask: [...sub]}
        }
        return elem
    })
}

// export let uncomleteAllSubtasks = (items, itemId, objPropName, newObjProps) => {
//     return items.map((elem) => {
//         if (elem[objPropName] === itemId) {

//             const sub = elem.subtask.map((sub) => {
//                     return {
//                         ...sub, ...newObjProps
//                         // subtask: [...elem[extra], ...newObjProps], 
//                     }
//             })
//             return {...elem, 
//             subtask: [...sub]}
//         }
//         return elem
//     })
// }

export let helperDeleteSubtask = (items, itemId, itemExtraId, objPropName) => {
    return items.map((elem) => {
        if (elem[objPropName] === itemId) {
            const sub = elem.subtask.filter(sub => sub.id !== itemExtraId);
            return {...elem, 
                subtask: [...sub]}
        }
        return elem
    })
}

export let helperAddSubtask = (items, itemId, objPropName, nameSubtask) => {
    return items.map((elem) => {
        if (elem[objPropName] === itemId) {
            return {...elem, 
                subtask: [...elem.subtask, {id:5, name: nameSubtask, complete: false}]}
        }
        return elem
    })
}