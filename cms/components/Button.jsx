export default function Button({ tag }) {
  return (
    <>
      <button className="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit" href="">
        {tag === 'addPage'
          ? 'Submit'
          : tag === 'editPage'
            ? 'Submit'
            : tag === 'login'
              ? 'Log In'
              : tag === 'register'
                ? 'Sign Up'
                : 'Upload'}
      </button>
    </>
  );
}
