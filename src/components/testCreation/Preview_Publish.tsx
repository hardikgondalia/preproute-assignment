

const Preview = () => {

  return (
    <>
      <main className="flex-1 h-full">
        <div className="flex items-center gap-2.5 justify-between flex-wrap">
          <div className="flex items-center gap-2 text-[16px] font-medium text-[#00000099]">
            <span>Tests</span>
            <span>/</span>
            <span>Create Test</span>
            <span>/</span>
            <span className="text-[#111827]">Preview & Publish</span>
          </div>
          <button
            className="bg-[#7489FF] hover:bg-[#292b86] text-white rounded-lg px-6 py-3 font-medium shadow cursor-pointer">
            Publish Test
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 pb-4 gap-6 mt-8 md:h-[calc(100%-60px)] overflow-hidden">

          <section className="xl:col-span-4 bg-white rounded-lg border border-[#E5E7EB] md:h-[calc(100vh-245px)] overflow-y-auto">
            <div
              className="p-4 border-b border-[#E5E7EB] flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                Test Details
              </h2>
              <button className="text-[#7489FF] cursor-pointer">
                Edit
              </button>
            </div>

            <div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">Test Name</p>
                <p className="font-medium mt-1">
                  Angular Basics Test
                </p>
              </div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">Subject</p>
                <p className="font-medium mt-1">
                  Angular
                </p>
              </div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">Duration</p>
                <p className="font-medium mt-1">
                  60 Minutes
                </p>
              </div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">
                  Total Questions
                </p>
                <p className="font-medium mt-1">
                  5
                </p>
              </div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">
                  Total Marks
                </p>
                <p className="font-medium mt-1">
                  50
                </p>
              </div>
              <div className="py-3 px-4">
                <p className="text-slate-500 text-md">
                  Passing Marks
                </p>
                <p className="font-medium mt-1">
                  25 (50%)
                </p>
              </div>
            </div>
          </section>

          <section className="xl:col-span-8 space-y-5 md:h-[calc(100vh-245px)] overflow-y-auto">
            <div className="bg-white rounded-lg border border-[#E5E7EB]">
              <div className="flex justify-between items-center border-b border-[#E5E7EB] p-4">
                <h2 className="font-semibold text-lg">
                  Question 1
                </h2>
                <span className="text-sm text-slate-500">
                  10 Marks
                </span>
              </div>
              <div className="p-6">
                <p className="font-semibold text-lg">
                  What is Angular?
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      id="one"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="one" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                      A JavaScript Framework
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="two"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="two" className="block text-[16px] font-normal text-[#374151] cursor-pointer">CSS Library</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="three"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="three" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                      Backend Framework
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="four"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="four" className="block text-[16px] font-normal text-[#374151] cursor-pointer">Programming Language</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-[#E5E7EB]">
              <div className="flex justify-between items-center border-b border-[#E5E7EB] p-4">
                <h2 className="font-semibold text-lg">
                  Question 1
                </h2>
                <span className="text-sm text-slate-500">
                  10 Marks
                </span>
              </div>
              <div className="p-6">
                <p className="font-semibold text-lg">
                  What is Angular?
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      id="one"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="one" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                      A JavaScript Framework
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="two"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="two" className="block text-[16px] font-normal text-[#374151] cursor-pointer">CSS Library</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="three"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="three" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                      Backend Framework
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="four"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="four" className="block text-[16px] font-normal text-[#374151] cursor-pointer">Programming Language</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-[#E5E7EB]">
              <div className="flex justify-between items-center border-b border-[#E5E7EB] p-4">
                <h2 className="font-semibold text-lg">
                  Question 1
                </h2>
                <span className="text-sm text-slate-500">
                  10 Marks
                </span>
              </div>
              <div className="p-6">
                <p className="font-semibold text-lg">
                  What is Angular?
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      id="one"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="one" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                      A JavaScript Framework
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="two"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="two" className="block text-[16px] font-normal text-[#374151] cursor-pointer">CSS Library</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="three"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="three" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                      Backend Framework
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="four"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="four" className="block text-[16px] font-normal text-[#374151] cursor-pointer">Programming Language</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-[#E5E7EB]">
              <div className="flex justify-between items-center border-b border-[#E5E7EB] p-4">
                <h2 className="font-semibold text-lg">
                  Question 1
                </h2>
                <span className="text-sm text-slate-500">
                  10 Marks
                </span>
              </div>
              <div className="p-6">
                <p className="font-semibold text-lg">
                  What is Angular?
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      id="one"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="one" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                      A JavaScript Framework
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="two"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="two" className="block text-[16px] font-normal text-[#374151] cursor-pointer">CSS Library</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="three"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="three" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                      Backend Framework
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="four"
                      type="radio"
                      name="push-notifications"
                      className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                    />
                    <label htmlFor="four" className="block text-[16px] font-normal text-[#374151] cursor-pointer">Programming Language</label>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>



      <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center">
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-5xl text-green-600">
            <img src="/images/tick.svg" alt="" className="w-18 h-18" />
          </div>
          <h2 className="text-3xl font-bold text-[#374151] mt-3">
            Test Published!
          </h2>
          <p className="text-slate-500 mt-3">
            Your test has been published successfully.
          </p>
          <div className="flex gap-3 mt-6">
            <button className="flex-1 border border-[#E5E7EB] rounded-lg py-3 cursor-pointer">
              View Test
            </button>
            <button className="bg-[#7489FF] hover:bg-[#292b86] text-white rounded-lg px-6 py-3 font-medium shadow cursor-pointer">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preview