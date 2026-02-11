import ProductForm from '../components/ProductForm';

export default function AddProduct() {
  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-5 py-5 min-vh-100"
        id="new-product-section"
        style={{
          background: 'linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%)',
        }}
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4">
          <h1
            className="fw-bold"
            style={{
              fontSize: '2.5rem',
              background: 'linear-gradient(90deg,#4f46e5,#7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            New Product
          </h1>
        </div>

        <ProductForm tag={'addPage'} />

        <div className="row">
          <div className="col-12 col-md-6"></div>
        </div>
      </section>
    </>
  );
}
