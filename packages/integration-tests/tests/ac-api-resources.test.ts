import { Resource } from '@logto/schemas';
import { managementResource } from '@logto/schemas/lib/seeds';

import { managementApi } from '@/api';

const testApiResource = {
  id: '',
  name: 'gallery',
  indicator: 'https://gallery.logto.io',
};

describe('admin console api resources', () => {
  it('should get api resource list with management api resource', async () => {
    const resources = await managementApi.get('resources').json<Resource[]>();
    expect(resources.length).not.toBeLessThan(1);

    const hasManagementResource = resources.some(
      (resource) => resource.id === managementResource.id
    );

    expect(hasManagementResource).toBeTruthy();
  });

  it('should get management api resource details', async () => {
    const fetchedManagementApiResource = await managementApi
      .get(`resources/${managementResource.id}`)
      .json<Resource>();

    expect(fetchedManagementApiResource.id).toBe(managementResource.id);
    expect(fetchedManagementApiResource.name).toBe(managementResource.name);
    expect(fetchedManagementApiResource.indicator).toBe(managementResource.indicator);
  });

  it('should create api resource', async () => {
    const createdResource = await managementApi
      .post('resources', {
        json: {
          name: testApiResource.name,
          indicator: testApiResource.indicator,
        },
      })
      .json<Resource>();

    expect(createdResource.name).toBe(testApiResource.name);
    expect(createdResource.indicator).toBe(testApiResource.indicator);

    // eslint-disable-next-line @silverhand/fp/no-mutation
    testApiResource.id = createdResource.id;

    const resources = await managementApi.get('resources').json<Resource[]>();

    expect(resources.some((resource) => resource.id === createdResource.id)).toBeTruthy();
  });

  it('should update api resource details', async () => {
    expect(testApiResource.id).toBeTruthy();

    const resource = await managementApi.get(`resources/${testApiResource.id}`).json<Resource>();

    const newResourceName = 'library';
    expect(resource.name).not.toBe(newResourceName);

    const accessTokenTtl = 100;
    expect(resource.accessTokenTtl).not.toBe(accessTokenTtl);

    const updatedApiResource = await managementApi
      .patch(`resources/${resource.id}`, {
        json: {
          name: newResourceName,
          accessTokenTtl,
        },
      })
      .json<Resource>();

    expect(updatedApiResource.name).toBe(newResourceName);
    expect(updatedApiResource.accessTokenTtl).toBe(accessTokenTtl);
  });

  it('should delete api resource', async () => {
    expect(testApiResource.id).toBeTruthy();

    await managementApi.delete(`resources/${testApiResource.id}`);

    const resources = await managementApi.get('applications').json<Resource[]>();

    const hasTestApplication = resources.some((app) => app.id === testApiResource.id);
    expect(hasTestApplication).toBeFalsy();
  });
});
