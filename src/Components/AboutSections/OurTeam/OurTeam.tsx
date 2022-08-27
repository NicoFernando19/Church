import React from 'react';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import Text from 'Elements/Text/Text';
import styles from './OurTeam.module.scss';
import CardMember from 'Components/CardMember/CardMember';

const OurTeam = () => {
  return (
    <Container className={styles.margin}>
      <Row className={styles.row}>
        <Text heading={'h6'} className={styles.subHeadline}>
          Church Members
        </Text>
      </Row>
      <Row className={styles.row}>
        <Text heading={'h2'} className={styles.headline}>
          Meet Our Inspirational Team
        </Text>
      </Row>
      <Row className={styles.ourTeamRow}>
        <CardMember
          image={styles.member1}
          name={'Kim Bowen'}
          position={'Pastor, Church'}
          facebookLink={'#'}
          twitterLink={'#'}
          linkedInLink={'#'}
        />
        <CardMember
          image={styles.member2}
          name={'Danielle Watkins'}
          position={'Pastor, Church'}
          facebookLink={'#'}
          twitterLink={'#'}
          linkedInLink={'#'}
        />
        <CardMember
          image={styles.member3}
          name={'Naomi Craig'}
          position={'Pastor, Church'}
          facebookLink={'#'}
          twitterLink={'#'}
          linkedInLink={'#'}
        />
        <CardMember
          image={styles.member4}
          name={'Santos Payne'}
          position={'Pastor, Church'}
          facebookLink={'#'}
          twitterLink={'#'}
          linkedInLink={'#'}
        />
      </Row>
    </Container>
  );
};

export default OurTeam;
