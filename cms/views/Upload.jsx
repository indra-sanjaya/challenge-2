import Button from '../components/Button';

export default function Upload() {
  return (
    <section
      className="col-md-9 ms-sm-auto col-lg-10 px-md-5 py-5 min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
      }}
    >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4">
        <h1
          className="fw-bold"
          style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(90deg,#db2777,#ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Update Product Image
        </h1>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div
          className="card shadow-lg border-0 rounded-4 p-5"
          style={{
            width: '500px',
          }}
        >
          <form>
            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Select Image File</label>

              <input type="file" className="form-control" required />
            </div>

            <div className="d-grid">
              <Button tag={'upload'} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
