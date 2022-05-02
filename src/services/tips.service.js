import { httpService } from './http.service'

export const tipsService = {
    query,
    addTip,
    removeTip,
    editTip
}

async function query() {
    const tips = await httpService.get('tip/alltips/')
    return tips
}
async function addTip({ user, id, content, title, date, label }) {
    const updatedTips = await httpService.post('tip/addtip/', { mail: user.mail, id, label, content, title, date })
    return updatedTips
}
async function removeTip(tipId) {
    const updatedtTips = await httpService.delete('tip/deletetip/', { id: tipId })
    return updatedtTips
}

async function editTip({ user, id, content, title, date, label }) {
    const updatedtTips = await httpService.put('tip/updatetip/', { mail: user.mail, id, content, title, date, label })
    return updatedtTips
}
