using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SceneController : MonoBehaviour
{

    public List<GameObject> children;

    // Start is called before the first frame update
    void Start()
    {
        children = new List<GameObject>();
        foreach (Transform child in transform)
        {
            children.Add(child.gameObject);
        }

        children[0].SetActive(true);
        children[1].SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void Toggle() 
    {
        children[1].SetActive(true);
        children[0].SetActive(false);
    }
}
