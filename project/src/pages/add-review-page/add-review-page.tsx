import AddReviewHeader from '../../components/add-review/add-review-header/add-review-header';
import AddReviewForm from '../../components/add-review/add-review-form/add-review-form';
import { PageTestID } from '../../const/enums';

const AddReviewPage = () => (
  <section className="film-card film-card--full" data-testid={PageTestID.AddReviewPage}>
    <AddReviewHeader />
    <AddReviewForm />
  </section>
);

export default AddReviewPage;
