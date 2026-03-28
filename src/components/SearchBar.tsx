import { type Dispatch, type SetStateAction } from "react";

interface Props {
  setUserInput: Dispatch<SetStateAction<string>>;
  userInput: string;
  placeholder?: string;
}

const SearchBar = ({ setUserInput, userInput, placeholder }: Props) => {
  return (
    <div className=" bg-gray-300 rounded-[20px]">
      <input
        type="text"
        className="w-full p-2 px-4 border border-gray-400 outline-none rounded-[20px]"
        placeholder={placeholder ?? ""}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
