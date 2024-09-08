const tg = window.Telegram.WebApp;

export function useTg() {
    const onClose = () => {
        tg.close()
    }
    const onToggleButton = () => {
        if (tg.MainButton.isVisible){
            tg.MainButton.hide()
        }
        else{
            tg.MainButton.show()
        }
    }
    return{
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
        onToggleButton
    }
}
