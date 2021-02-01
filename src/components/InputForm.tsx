interface iPropsInput {
    className: string;
    label: string;
    type: string;
    onChange: (value: string) => void;
    required: boolean | undefined;
}


export default function InputForm(props: iPropsInput): JSX.Element {
    //Why?
    //because the fields for 'email' and 'password' are similar, so we can reuse this
    return (
        <div className={props.className}>
            <label>{props.label}</label>
            <input
                type={props.type}
                onChange={(e) => props.onChange(e.target.value)}
                required={props.required}
            />
        </div>
    );
}