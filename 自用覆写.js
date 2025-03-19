function main(config) {
	// 代理组
  config["proxy-groups"] = [
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Static.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      name: "手动选择",
      type: "select",
	  url: "http://www.gstatic.com/generate_204",
      proxies: ["DIRECT", "自动选择", "香港", "台湾", "新加坡", "日本", "韩国", "美国", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Urltest.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      name: "自动选择",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png",
      "include-all": true,
      filter: "(?i)香港|HK|Hong Kong|HongKong",
      name: "香港组",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png",
      "include-all": true,
      filter: "(?i)台湾|Taiwan|TW",
      name: "台湾组",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png",
      "include-all": true,
      filter: "(?i)新加坡|Singapore|SG",
      name: "新加坡组",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png",
      "include-all": true,
      filter: "(?i)日本|Japan|JP",
      name: "日本组",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/KR.png",
      "include-all": true,
      filter: "(?i)韩国|Korea|KR",
      name: "韩国组",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png",
      "include-all": true,
      filter: "(?i)美国|United States|UnitedStates|America|US",
      name: "美国组",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/UN.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群|香港|HK|Hong Kong|HongKong|台湾|Taiwan|TW|新加坡|Singapore|SG|日本|Japan|JP|韩国|Korea|KR|美国|United States|UnitedStates|America|US",
      name: "其他地区",
      type: "select",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Telegram.png",
      name: "Telegram",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港组", "新加坡组", "台湾组", "日本组", "韩国组", "美国组", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Google.png",
      name: "Google",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港组", "新加坡组", "台湾组", "日本组", "韩国组", "美国组", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Microsoft.png",
      name: "Microsoft",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港组", "新加坡组", "台湾组", "日本组", "韩国组", "美国组", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/YouTube.png",
      name: "Youtube",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港组", "新加坡组", "台湾组", "日本组", "韩国组", "美国组", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Netflix.png",
      name: "Netflix",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港组", "新加坡组", "台湾组", "日本组", "韩国组", "美国组", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Bili.png",
      name: "哔哩哔哩",
      type: "select",
      proxies: ["DIRECT", "手动选择", "香港组", "台湾组"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/steam.png",
      name: "Steam",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港组", "新加坡组", "台湾组", "日本组", "韩国组", "美国组", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/epic.png",
      name: "Epic",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港组", "新加坡组", "台湾组", "日本组", "韩国组", "美国组", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/milangree/mihomo-party-overwrite/refs/heads/main/electronic-arts.png",
      name: "EA",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港组", "新加坡组", "台湾组", "日本组", "韩国组", "美国组", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Global.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港组", "新加坡组", "台湾组", "日本组", "韩国组", "美国组", "其他地区"],
      name: "GLOBAL",
      type: "select",
    }
  ];
	// 规则组
  if (!config['rule-providers']) {
    config['rule-providers'] = {};
  }
  config["rule-providers"] = Object.assign(config["rule-providers"],
	{
    // 内网路由
    private_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/private.yaml",
      path: "./ruleset/private_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    private_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/private.yaml",
      path: "./ruleset/private_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // 国内路由
    cn_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/cn.yaml",
      path: "./ruleset/cn_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    cn_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/cn.yaml",
      path: "./ruleset/cn_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // 非国内路由
    "geolocation-!cn": {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.yaml",
      path: "./ruleset/geolocation-!cn.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // Telegram
    telegram_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/telegram.yaml",
      path: "./ruleset/telegram_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    telegram_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/telegram.yaml",
      path: "./ruleset/telegram_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // Google
    google_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/google.yaml",
      path: "./ruleset/google_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    google_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/google.yaml",
      path: "./ruleset/google_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // Microsoft
    microsoft: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/google.yaml",
      path: "./ruleset/microsoft.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // YouTube
    youtube_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/youtube.yaml",
      path: "./ruleset/youtube_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    youtube_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/yt.yaml",
      path: "./ruleset/youtube_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // Netflix
    netflix_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/netflix.yaml",
      path: "./ruleset/netflix_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    netflix_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/netflix.yaml",
      path: "./ruleset/netflix_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // 哔哩哔哩
    bilibili_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo-lite/geosite/bilibili.yaml",
      path: "./ruleset/bilibili_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    bilibili_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo-lite/geoip/bilibili.yaml",
      path: "./ruleset/bilibili_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // Steam
    steam: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/steam.yaml",
      path: "./ruleset/steam.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // Epic
    epic: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/epicgames.yaml",
      path: "./ruleset/epic.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    // EA 
    ea: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ea.yaml",
      path: "./ruleset/ea.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
  });

	// 规则策略
  config["rules"] = [
    "RULE-SET,private_domain,DIRECT",
    "RULE-SET,private_ip,DIRECT",
    "RULE-SET,cn_domain,DIRECT",
    "RULE-SET,cn_ip,DIRECT",
    "RULE-SET,geolocation-!cn,手动选择",
    "RULE-SET,telegram_domain,Telegram",
    "RULE-SET,telegram_ip,Telegram",
    "RULE-SET,google_domain,Google",
    "RULE-SET,google_ip,Google",
    "RULE-SET,microsoft,Microsoft",
    "RULE-SET,youtube_domain,Youtube",
    "RULE-SET,youtube_ip,Youtube",
    "RULE-SET,netflix_domain,Netflix",
    "rULE-SET,netflix_ip,Netflix",
    "RULE-SET,bilibili_domain,哔哩哔哩",
    "RULE-SET,bilibili_ip,哔哩哔哩",
    "RULE-SET,steam,Steam",
    "RULE-SET,epic,Epic",
    "RULE-SET,ea,EA",
    "MATCH,手动选择",
  ];
  return config;
}
