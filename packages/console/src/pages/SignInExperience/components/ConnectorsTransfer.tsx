import { ConnectorType } from '@logto/schemas';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Alert from '@/components/Alert';
import Transfer from '@/components/Transfer';
import UnnamedTrans from '@/components/UnnamedTrans';
import useConnectorGroups from '@/hooks/use-connector-groups';
import ConnectorPlatformIcon from '@/icons/ConnectorPlatformIcon';

import * as styles from './ConnectorsTransfer.module.scss';

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

const ConnectorsTransfer = ({ value, onChange }: Props) => {
  const { data, error } = useConnectorGroups();
  const isLoading = !data && !error;
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });

  const socialConnectorGroups = data
    ?.filter(({ type }) => type === ConnectorType.Social)
    ?.filter(({ enabled }) => enabled);

  const datasource = socialConnectorGroups
    ? socialConnectorGroups.map(({ target, name, connectors, logo }) => ({
        value: target,
        title: (
          <div className={styles.title}>
            <div className={styles.logo}>
              <img src={logo} alt={target} />
            </div>
            <UnnamedTrans resource={name} />
            {connectors.length > 1 &&
              connectors
                .filter(({ enabled }) => enabled)
                .map(({ platform }) => (
                  <div key={platform} className={styles.icon}>
                    {platform && <ConnectorPlatformIcon platform={platform} />}
                  </div>
                ))}
          </div>
        ),
      }))
    : [];

  useEffect(() => {
    if (!socialConnectorGroups) {
      return;
    }

    const filteredValue = value.filter((target) =>
      socialConnectorGroups.some((group) => group.target === target)
    );

    // Remove unavailable connectors
    if (filteredValue.length !== value.length) {
      onChange(filteredValue);
    }
  }, [onChange, socialConnectorGroups, value]);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (!data && error) {
    return <div>{`error occurred: ${error.body?.message ?? error.message}`}</div>;
  }

  return (
    <>
      {value.length === 0 && (
        <Alert>{t('sign_in_exp.setup_warning.no_added_social_connector')}</Alert>
      )}
      <Transfer
        value={value}
        datasource={datasource}
        title={t('sign_in_exp.sign_in_methods.transfer.title')}
        footer={
          <div>
            {t('sign_in_exp.sign_in_methods.transfer.footer.not_in_list')}{' '}
            <Link to="/connectors/social" target="_blank">
              {t('sign_in_exp.sign_in_methods.transfer.footer.set_up_more')}
            </Link>{' '}
            {t('sign_in_exp.sign_in_methods.transfer.footer.go_to')}
          </div>
        }
        onChange={onChange}
      />
    </>
  );
};

export default ConnectorsTransfer;
