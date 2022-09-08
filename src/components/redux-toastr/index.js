import ReduxToastr from 'react-redux-toastr'

const Toastr = () => (
  <ReduxToastr
    timeOut={2500}
    newestOnTop={false}
    preventDuplicates
    position="top-right"
    getState={(state) => state.toastr}
    transitionIn="bounceIn"
    transitionOut="fadeOut"
    progressBar
    closeOnToastrClick
  />
)

export default Toastr
