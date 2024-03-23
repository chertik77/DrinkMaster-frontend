'use client'

const page = () => {
  return (
    <div>
      <h1 className="mb-7 text-fs-28-fw-600 text-primaryLight tablet:text-fs-40">
        Sign In
      </h1>
      <form
        className="flex flex-col"
        onSubmit={e => console.log(e.target)}>
        <input type='text' />
        <input type='text' />
        <button
          type='submit'
          className="rounded-[42px] bg-primaryLight px-10 py-[14px] text-fs-14-fw-600 tablet:px-11
            tablet:py-[18px] tablet:text-fs-16-fw-600">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default page
