interface FooterProp {
  setUserId: (number: number) => void;
  setHasMoreUsers: (boolean: boolean) => void;
}

const Footer = ({ setUserId, setHasMoreUsers }: FooterProp) => {
  const handleRestClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserId(1);
    setHasMoreUsers(true);
  };

  return (
    <section className="text-center">
      <p className="text-lg mb-4 text-white">
        No more users available. You have reached the end of the list.
      </p>
      <button
        onClick={handleRestClick}
        className="bg-green-500 hover:bg-green-600 transition-colors text-white font-bold py-2 px-4 rounded"
      >
        Reset and Start Over
      </button>
    </section>
  );
};

export default Footer;
