import { OrganizationData, OrganizationTree } from "@/type/organization";

export const transformOrgData = (data: OrganizationData[]): OrganizationTree => {
  const idMap = new Map<number, OrganizationTree>();

  // 首先，将所有的节点添加到 idMap 中
  data.forEach(item => {
    idMap.set(item.id, {
      id: item.id,
      name: item.name,
      style: {},
      children: [],
    });
  });

  // 然后，将每个节点添加到其父节点的 children 数组中
  data.forEach(item => {
    if (item.parentid !== 0) {
      const parent = idMap.get(item.parentid);
      if (parent) {
        parent.children?.push(idMap.get(item.id)!);
      }
    }
  });

  // 最后，返回根节点
  return idMap.get(1)!;
}