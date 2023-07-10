import React from 'react';
import Container from 'Elements/Wrappers/Container/Container';
import Row from 'Elements/Wrappers/Row/Row';
import styles from './Content.module.scss';
import Tile from 'Elements/Wrappers/Tile/Tile';
import Text from 'Elements/Text/Text';
import Button from 'Elements/Button/Button';

const Content = () => {
  return (
    <Container>
      <Row className={`${styles.row} ${styles.margin}`}>
        <Tile className={styles.tile}>
          <Text className={`${styles.text} ${styles.textTile}`}>
            <div className={styles.circle}>&darr;</div>Download the Font family
            👉
          </Text>
          <Text
            className={`${styles.text} ${styles.roboto} ${styles.textTile}`}
          >
            <div className={styles.iconFile}></div>
            Roboto Condensed
          </Text>
        </Tile>
      </Row>
      <Row className={`${styles.row} ${styles.my}`}>
        <table className={styles.table}>
          <tr>
            <td>
              <Text heading={'h1'} className={styles.textHeading}>
                Heading 1
              </Text>
            </td>
            <td>
              <Text heading={'h1'} className={styles.textHeading}>
                AA
              </Text>
            </td>
            <td>
              <Text heading={'h1'} className={styles.textHeading}>
                64px
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text heading={'h2'} className={styles.textHeading}>
                Heading 2
              </Text>
            </td>
            <td>
              <Text heading={'h2'} className={styles.textHeading}>
                AA
              </Text>
            </td>
            <td>
              <Text heading={'h2'} className={styles.textHeading}>
                48px
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text heading={'h3'} className={styles.textHeading}>
                Heading 3
              </Text>
            </td>
            <td>
              <Text heading={'h3'} className={styles.textHeading}>
                AA
              </Text>
            </td>
            <td>
              <Text heading={'h3'} className={styles.textHeading}>
                40px
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text heading={'h4'} className={styles.textHeading}>
                Heading 4
              </Text>
            </td>
            <td>
              <Text heading={'h4'} className={styles.textHeading}>
                AA
              </Text>
            </td>
            <td>
              <Text heading={'h4'} className={styles.textHeading}>
                32px
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text heading={'h5'} className={styles.textHeading}>
                Heading 5
              </Text>
            </td>
            <td>
              <Text heading={'h5'} className={styles.textHeading}>
                AA
              </Text>
            </td>
            <td>
              <Text heading={'h5'} className={styles.textHeading}>
                24px
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text heading={'h6'} className={styles.textHeading}>
                Heading 6
              </Text>
            </td>
            <td>
              <Text heading={'h6'} className={styles.textHeading}>
                AA
              </Text>
            </td>
            <td>
              <Text heading={'h6'} className={styles.textHeading}>
                16px
              </Text>
            </td>
          </tr>
        </table>
      </Row>
      <Row className={`${styles.row} ${styles.margin}`}>
        <Text className={`${styles.text} ${styles.roboto}`}>Color Palette</Text>
      </Row>
      <Row className={`${styles.row} ${styles.mx}`}>
        <table className={styles.colorPalette} cellSpacing='0'>
          <tr>
            <td className={styles.black}></td>
            <td className={styles.primary}></td>
            <td className={styles.lOrange}></td>
            <td className={styles.grey}></td>
          </tr>
        </table>
      </Row>
      <div className={`${styles.box} ${styles.margin}`}>
        <div>
          <Row className={`${styles.row} ${styles.marginBtn}`}>
            <Text className={`${styles.text} ${styles.roboto}`}>Buttons</Text>
          </Row>
          <Row className={`${styles.row} ${styles.marginBtn}`}>
            <Button primary={true} className={styles.btn}>
              Button
            </Button>
          </Row>
          <Row className={`${styles.row} ${styles.marginBtn}`}>
            <Button className={styles.btn}>Secondary</Button>
          </Row>
          <Row className={`${styles.row} ${styles.marginBtn}`}>
            <Button primary={true} className={styles.btn}>
              Nav Button
            </Button>
          </Row>
        </div>
        <div>
          <Row className={`${styles.row} ${styles.marginBtn}`}>
            <Text className={`${styles.text} ${styles.roboto}`}>
              Hover States
            </Text>
          </Row>
          <Row className={`${styles.row} ${styles.marginBtn}`}>
            <Button primary={true} className={styles.hoverPrimaryBtn}>
              Button
            </Button>
          </Row>
          <Row className={`${styles.row} ${styles.marginBtn}`}>
            <Button className={styles.hoverSecondaryBtn}>Secondary</Button>
          </Row>
          <Row className={`${styles.row} ${styles.marginBtn}`}>
            <Button primary={true} className={styles.hoverPrimaryBtn}>
              Nav Button
            </Button>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Content;
