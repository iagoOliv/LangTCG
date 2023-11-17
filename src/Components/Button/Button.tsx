import './Button.scss'
import { PrinterFill, Download } from 'react-bootstrap-icons';

interface ButtonProps {
    buttonText: string,
    icon?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    func?: any,
}

const Button = ({ buttonText, func, icon }: ButtonProps) => {
    let buttonFunc;
    let buttonIcon;
    if (func != undefined) { buttonFunc = <>onClick={func}</>; }

    switch (icon) {
        case "download":
            buttonIcon = <Download></Download>
            break;
        case "printerfill":
            buttonIcon = <PrinterFill></PrinterFill>
            break;
        default:
            buttonIcon = ""
            break;
    }

    return (
        <>
            <button className="button" { ...buttonFunc }>
                { buttonIcon }
                <span className="button__text">{ buttonText }</span>
            </button>
        </>
    )
}

export default Button;