const BtnPrimary = ({ width, py, bg, children }) => {
  const buttonClass = `text-white text-[14px] font-medium rounded-full border border-[#4D27BA] ${width} ${py} ${bg}`;
  return <button className={buttonClass}>{children}</button>;
};

const BtnTransparent = ({ width, py, bg, children }) => {
  const buttonClass = `text-[#4D27BA] text-[14px] font-medium rounded-full border border-[#4D27BA] ${width} ${py} ${bg}`;
  return <button className={buttonClass}>{children}</button>;
};

export { BtnPrimary, BtnTransparent };
