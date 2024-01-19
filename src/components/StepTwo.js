import * as React from "react";

export default function MyComponent(props) {
  return (
    <div
      className="flex flex-col justify-between relative box-border min-h-[100px] h-screen bg-slate-100"
      maxWidth={1200}
      lazyLoad={false}
    >
      <div className="relative shrink-0 box-border flex flex-row justify-between bg-white border-b px-10 py-5 border-gray-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2Fe2dd9cd3b9b44c819d4d8c1e694e5bf8%2F6d9075ebe62e4b45a92928ac7aa4e861"
          className="aspect-[5.52] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[214px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2Fe2dd9cd3b9b44c819d4d8c1e694e5bf8%2F36edc88486974c3aa032f53ba1e3d7ea"
          className="aspect-square object-cover object-right w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[32px]"
        />
      </div>
      <section className="f">
        <div className="flex flex-col relative shrink-0 box-border h-auto w-[600px] m-auto rounded-lg">
          <div className="relative shrink-0 box-border bg-white flex-col flex h-auto my-auto p-8 rounded-md">
            <div className="relative shrink-0 box-border h-auto">
              <h2
                style={{
                  fontWeight: "lighter",
                  fontSize: "2em",
                  marginTop: 0,
                  marginBottom: "4px",
                  fontFamily: '"Open Sans", sans-serif',
                  fontStyle: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                }}
              >
                Release funds
                <br />
              </h2>
              <p>
                To release your funds, please enter the code that we sent to you
                in the post.
              </p>
            </div>
            <form className="flex flex-col relative shrink-0 box-border mt-4 pb-4">
              <div className="mt-2.5">
                <p>Code</p>
              </div>
              <input
                name="name"
                placeholder=""
                className="rounded border w-[55%] mt-2.5 p-2 border-solid border-neutral-500 border-opacity-30"
              />

              <div className="flex items-center mt-5">
                <p>Didn't receive a code?</p>
                <a
                  href=""
                  className="text-red-400 underline cursor-not-allowed ml-2"
                >
                  Resend code
                </a>
              </div>
            </form>
          </div>
          <button
            text="Submit"
            className="w-[135px] bg-red-600 text-white border text-center ml-auto mt-8 p-2.5 rounded-[39px] border-none"
          >
            Submit
          </button>
        </div>
      </section>
      <div className="flex flex-col relative shrink-0 box-border h-[100px] bg-white">
        <div className="relative shrink-0 box-border flex flex-row justify-between items-center w-[600px] m-auto">
          <div className="relative shrink-0 box-border h-auto text-base font-light mt-5">
            <p className="cursor-not-allowed underline">
              Online Banking Guarantee
            </p>
          </div>
          <div className="relative shrink-0 box-border h-auto font-light mt-5">
            <p className="cursor-not-allowed underline">
              Site Help &amp; Accessibility
            </p>
          </div>
          <div className="relative shrink-0 box-border h-auto font-light mt-5">
            <p className="cursor-not-allowed underline">Security</p>
          </div>
          <div className="relative shrink-0 box-border h-auto font-light mt-5">
            <p className="cursor-not-allowed underline">Legal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
