export let updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
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
            const sub = elem.subtask.map((sub) => {
                if (sub[objPropName] === itemExtraId) {
                    return {
                        ...sub, ...newObjProps
                    }
                }
                return sub
            })
            return {
                ...elem,
                subtask: [...sub]
            }
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
                }
            })
            return {
                ...elem,
                subtask: [...sub]
            }
        }
        return elem
    })
}

export let helperDeleteSubtask = (items, itemId, itemExtraId, objPropName) => {
    return items.map((elem) => {
        if (elem[objPropName] === itemId) {

            const sub = elem.subtask.filter(sub => sub._id !== itemExtraId);
            return {
                ...elem,
                subtask: [...sub]
            }
        }
        return elem
    })
}

export let helperAddSubtask = (items, itemId, objPropName, subtask) => {
    return items.map((elem) => {
        if (elem[objPropName] === itemId) {
            return {
                ...elem,
                subtask: [...elem.subtask, { ...subtask }]
            }
        }
        return elem
    })
}

export let helperChangeSubtask = (items, itemId, objPropName, subtask) => {
    return items.map((elem) => {
        if (elem[objPropName] === itemId) {
            const sub = elem.subtask.filter(sub => sub._id !== 1);
            return {
                ...elem,
                subtask: [...sub, { ...subtask }]
            }
        }
        return elem
    })
}