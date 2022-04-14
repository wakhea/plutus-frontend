import React from 'react';
import PropTypes from 'prop-types';
import Box from '../common/components/Box';
import Text from '../common/components/Text';
import Heading from '../common/components/Heading';
import Container from '../common/components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';

const HEADING_CONTENT="Plutus Protocol provides a unique chance for brilliant investors to pool together " + 
"and fund venture-capital-level opportunities collectively. Instead of having to sink all or most of your capital " +
"in one, single place at any given time, and instead of missing out on a spectacular offer due to lack of available funds, " +
"the pooled Treasury will enable your blockchain investments through DAO voting to be diversely " +
"sown across multiple VC opportunities. Decreased risk. Sustained reward.";

const FeatureSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
}) => {
  return (
    <FeatureSectionWrapper id="key-features">
      <Container>
        <Box {...sectionHeader} className="sectionHeader">
          <Text content="WHY PLUTUS PROTOCOL" {...sectionSubTitle} />
          <Heading
            content={HEADING_CONTENT}
            className="sectionTitle"
            {...sectionTitle}
          />
        </Box>
        <div className="padder" />
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    display: 'flex',
    width: '100%',
    color: "red"
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: ['30px', '40px'],
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
    color: '#3461E8',
    mb: '15px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'left',
    fontSize: ['16px', '18px'],
    fontWeight: '400',
    color: '#5b82f8',
    mb: '0',
    maxWidth: '420px',
    lineHeight: '1.5',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },

  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#13296C',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '15px'],
    letterSpacing: '-0.025em',
    mt: ['15px', '15px', '15px', '25px'],
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(19, 41, 108, 0.502)',
  },
};

export default FeatureSection;
