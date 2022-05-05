import colors from "../../utils/Colors";

import viewStates from "../../utils/ViewStates";
import { getBase64 } from "../../utils/Base64";
import { addDrink } from "../../utils/ApiHandler";
import { DrinkContext } from "../../utils/Context";

import { useState, useContext } from "react";

import NameFormInput from "./FormInputs/NameFormInput";
import AmountFormInput from "./FormInputs/AmountFormInput";
import URLFormInput from "./FormInputs/URLFormInput";
import ImageFormInput from "./FormInputs/ImageFormInput";
import TypeFormInput from "./FormInputs/TypeFormInputs";
import SubmitButton from "./FormInputs/SubmitButton";

function PopupForm({ setIsPopupOpen }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [url, setURL] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [type, setType] = useState(viewStates.alcoholView);

  const context = useContext(DrinkContext);

  function isValid(formInputType, value) {
    switch (formInputType) {
      case "name":
        return value.length > 0;
      case "amount":
        if (value !== undefined || value != null) {
          let parsedValue = parseInt(value);
          return typeof parsedValue === "number" && parsedValue >= 0;
        }
        return typeof value === "number";
      case "image":
        return value.endsWith(".png");
      case "url":
        return value.length > 0 && value.includes("https://www.amazon.de");
      default:
        return false;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isValidFormInput =
      isValid("name", name) &&
      isValid("amount", amount) &&
      isValid("image", imageFile.name) &&
      isValid("url", url);

    if (!isValidFormInput) return;

    getBase64(imageFile).then((base64) => {
      let newDrink = {
        name: name,
        amount: amount,
        imageBase64: base64,
        url: url,
        type: type,
      };
      addDrink(newDrink, context);
      setIsPopupOpen(false);
    });
  }

  return (
    //  translate-x-[calc(-1*(50vw-50%))]
    <>
      <div className="border-none grid grid-cols-12">
        <div
          className="font-bold border-none grid grid-cols-1 col-span-12 rounded-lg border-2 shadow-2xl py-6 px-8"
          style={{
            backgroundColor: colors.cardBackground,
            color: colors.lightText,
          }}
        >
          <button
            className="
            font-semibold text-lg
            col-end-10 px-2 py-1
            transition hover:scale-110 hover:-translate-y-[0.125rem] duration-[200ms]
            rounded-md"
            onClick={() => setIsPopupOpen(false)}
            style={{ backgroundColor: colors.red, color: colors.darkText }}
          >
            X
          </button>
          <p className="text-2xl col-span-12 mb-8 text-center">
            Please add a Drink! 🚀
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-12 grid-rows-3"
          >
            <NameFormInput name={name} setName={setName} isValid={isValid} />
            <AmountFormInput
              amount={amount}
              setAmount={setAmount}
              isValid={isValid}
            />
            <URLFormInput setURL={setURL} url={url} isValid={isValid} />
            <ImageFormInput
              imageFile={imageFile}
              setImageFile={setImageFile}
              isValid={isValid}
            />
            <TypeFormInput setType={setType} type={type} />
            <SubmitButton />
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupForm;
