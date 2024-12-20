type ButtonProps = {
    className?: string;
    disabled?: boolean;
    children: string;
};

const buttonVariants = {
    default:
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-black-600 disabled:text-white-600 disabled:scale-100",
};

const Button = ({
    className = "",
    disabled = false,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={`${className} ${buttonVariants.default}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
