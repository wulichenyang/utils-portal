/**
 *
 * localStorage 封装类，支持简单数据类型的存储，支持 expire 过期设置
 *
 * 注意：
 *
 * 1. 目前不支持存储 Function、RegExp、Error
 * 2. 如果有 value 为 undefined 的数据，存储时 key 会丢失
 * 3. 可存储 value 为 null 的数据
 * 4. 存储 Date 类型的数据，先手动转化为 number 类型（时间戳）
 *
 */
class LocalStore {
  setItem = (key: string, value: any, expiry?: number) => {
    try {
      const item = {
        value: JSON.stringify(value),
        expiry: expiry !== undefined ? new Date().getTime() + expiry : null,
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
      console.error(`Error storing item ${key} to localStorage`, e);
    }
  };

  getItem = (key: string, defaultValue?: any) => {
    const defaultResult = defaultValue ?? null;
    try {
      const itemStr = localStorage.getItem(key);

      if (!itemStr) {
        return defaultResult;
      }

      const item = JSON.parse(itemStr);
      const currentTime = new Date().getTime();

      if (item.expiry && item.expiry < currentTime) {
        localStorage.removeItem(key);
        return defaultResult;
      }

      return JSON.parse(item.value);
    } catch (e) {
      console.error(`Error getting item ${key} from localStorage`, e);
      return defaultResult;
    }
  };

  removeItem = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(`Error removing item ${key} from localStorage`, e);
    }
  };

  key = (index: number): string | null => {
    return localStorage.key(index);
  };

  clear = (): void => {
    return localStorage.clear();
  };
}

/**
 *
 * localStorage 封装类，支持简单数据类型的存储，支持 expire 过期设置
 *
 * 注意：
 *
 * 1. 目前不支持存储 Function、RegExp、Error
 * 2. 如果有 value 为 undefined 的数据，存储时 key 会丢失
 * 3. 可存储 value 为 null 的数据
 * 4. 存储 Date 类型的数据，先手动转化为 number 类型（时间戳）
 *
 */
export const localStore = new LocalStore();
