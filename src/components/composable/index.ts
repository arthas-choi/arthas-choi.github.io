export const copyToClipboard = (text: string) => {
     if (text === null) { return }
    if (!navigator.clipboard) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.cssText = 'position:absolute;left:-9999px;top:-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    } else {
        navigator.clipboard.writeText(text);
    }

    alert("계좌번호 " + text + " 가 복사되었습니다.")
};

export const copyToClipboard2 = (text: string) => {
    if (text === null) { return }
    if (!navigator.clipboard) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.cssText = 'position:absolute;left:-9999px;top:-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    } else {
        navigator.clipboard.writeText(text);
    }

    alert("청첩장 주소가 복사되었습니다.")
};