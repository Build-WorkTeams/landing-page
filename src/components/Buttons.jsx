const BtnPrimary = ({ width, py, bg, children }) => {
  const buttonClass = `text-white rounded-full border border-[#4D27BA] ${width} ${py} ${bg}`;
  return <button className={buttonClass}>{children}</button>;
};

const BtnTransparent = ({ width, py, bg, children }) => {
  const buttonClass = `text-[#4D27BA] rounded-full border border-[#4D27BA] ${width} ${py} ${bg}`;
  return <button className={buttonClass}>{children}</button>;
};

export { BtnPrimary, BtnTransparent };
