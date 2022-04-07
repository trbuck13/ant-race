type ButtonProps = {
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ primary, disabled, onClick, children }) => {
  const colorClasses = primary
    ? `bg-sky-400 text-white hover:bg-sky-500`
    : `bg-white text-sky-600 hover:bg-sky-50`;

  const handleClick = () => {
    if (disabled || !onClick) return;
    onClick();
  };

  return (
    <button
      className={`${colorClasses} ${
        disabled ? 'cursor-not-allowed opacity-60' : ''
      } inline-flex w-full items-center justify-center rounded-md border border-transparent  px-5 py-3 text-base font-medium  sm:w-auto`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
