import * as React from 'react';
import { countryAction } from 'store/actions';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as models from 'store/models';
import { AjaxMain } from 'component';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

interface Props {
  countries: models.AjaxState,
  getCountries: typeof countryAction.countryRequest;
}

class Country extends React.Component<Props> {
  componentDidMount() {
    this.props.getCountries(endpoint);
  }
  render() {
    const { countries } = this.props;
    return (
      <>
        <AjaxMain countries={countries} />
      </>
    )
  }
}

const mapStateToProps = (rootState: rootState) => ({
  countries: rootState.ajax,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCountries: (url: string) => dispatch(countryAction.countryRequest(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(Country);

export default connectModule;