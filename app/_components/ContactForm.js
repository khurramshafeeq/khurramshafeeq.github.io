import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export default function Page() {
  return (
    <>
      <div className="p-fluid flex flex-col gap-2">
        <InputText
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Name*"
        />
        <InputText
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Email*"
        />
        <InputText
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Location"
        />
        <div className="flex gap-6">
          <div className="w-1/3">
            <InputText
              className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
              placeholder="Budget*"
            />
          </div>
          <div className="w-2/3">
            <InputText
              className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
              placeholder="Subject*"
            />
          </div>
        </div>
        <InputTextarea
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Message*"
          rows={5}
          cols={30}
        />
      </div>
      <Button
        className="bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 mt-9"
        label="Submit"
        icon="pi pi-send"
        iconPos="right"
      />
    </>
  );
}
