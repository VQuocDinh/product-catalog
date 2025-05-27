import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'; 
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode; 
    onClick?: () => void; 
    disabled?: boolean; 
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    children,
    onClick,
    disabled = false,
    className = '',
    ...props
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800';
            case 'secondary':
                return 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400';
            case 'outline':
                return 'border border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 active:bg-blue-100';
            default:
                return 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800';
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'small':
                return 'px-2 py-1 text-sm';
            case 'large':
                return 'px-6 py-3 text-lg';
            case 'medium':
            default:
                return 'px-4 py-2 text-base';
        }
    };

    const baseStyles = 'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
    const variantStyles = getVariantStyles();
    const sizeStyles = getSizeStyles();

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;