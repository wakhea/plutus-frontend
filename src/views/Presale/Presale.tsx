import { Paper, Grid, Typography, Button, Box } from "@material-ui/core";
import { Metric, MetricCollection } from "../../components/Metric";
import { useWeb3Context } from "src/hooks/web3Context";
import { useAppSelector } from "src/hooks";
import { formatTimestamp } from "src/helpers";

import "./presale.scss";

const Presale = () => {
  const { provider, address, connect } = useWeb3Context();

  const plusBalance = useAppSelector(state => {
    return state.presale.info.plus;
  });

  const contribution = useAppSelector(state => {
    return state.presale.info.contribution;
  });

  const contributionLimit = useAppSelector(state => {
    return state.presale.info.contributionLimit;
  });

  const totalContribution = useAppSelector(state => {
    return state.presale.info.totalContribution;
  });

  const closingDate = useAppSelector(state => {
    return formatTimestamp(state.presale.info.closingDate, false);
  });

  let modalButton = [];

  modalButton.push(
    <Button variant="contained" color="primary" className="connect-button" onClick={connect} key={1}>
      Connect Wallet
    </Button>,
  );

  return (
    <div id="presale-view">
      <Paper className={`ohm-card`}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <div className="card-header">
              <Typography variant="h5">Presale</Typography>
            </div>
          </Grid>
          <Grid item>
            <MetricCollection>
              <Metric
                className="plus-bought"
                label={`Total PLUS Bought`}
                metric={totalContribution}
                //isLoading={stakingAPY ? false : true}
              />
              <Metric
                className="plus-price"
                label={`Plus Token Price`}
                metric={"0.01 BNB"}
                //isLoading={stakingTVL ? false : true}
              />
              <Metric
                className="presale-end"
                label={`Presale End`}
                metric={closingDate}
                //isLoading={currentIndex ? false : true}
              />
            </MetricCollection>
          </Grid>
          <div className="presale-area">
            {!address ? (
              <div className="presale-wallet-notification">
                <div className="wallet-menu" id="wallet-menu">
                  {modalButton}
                </div>
                <Typography variant="h6">Connect your wallet to access presale</Typography>
              </div>
            ) : (
              <div className="presale-buy-area">
                <Button variant="contained" color="primary" className="buy-button" onClick={connect} key={1}>
                  Buy Token
                </Button>
                <Box className="presale-data">
                  <div className="data-row">
                    <Typography>PLUS balance</Typography>
                    <Typography className="price-data">{plusBalance} PLUS</Typography>
                  </div>
                  <div className="data-row">
                    <Typography>Contribution</Typography>
                    <Typography className="price-data">{contribution} BNB</Typography>
                  </div>
                  <div className="data-row">
                    <Typography>Max Contribution</Typography>
                    <Typography className="price-data">{contributionLimit} BNB</Typography>
                  </div>
                </Box>
              </div>
            )}
          </div>
        </Grid>
      </Paper>
    </div>
  );
};

export default Presale;
