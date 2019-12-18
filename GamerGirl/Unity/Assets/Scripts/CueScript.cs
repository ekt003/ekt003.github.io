using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using Cradle;

public class CueScript : MonoBehaviour
{
    public TwineTextPlayer twinePlayer;
    public EmilyHortonIntroDraft emilyDraft;

    private bool sceneEnded = false;

    void Start() 
    {
        twinePlayer = GetComponent<TwineTextPlayer>();
        emilyDraft = GetComponent<EmilyHortonIntroDraft>();
    }

    [StoryCue("Go to him", "Done")]
    [StoryCue("Follow him", "Done")]
    [StoryCue("Continue to ignore", "Done")]
    [StoryCue("Try to signal a \"no thanks, I'm good\"", "Done")]
    void EndScene()
    {
        Debug.Log("Scene has ended");
        sceneEnded = true;
    }

    void Update()
    {
        if (sceneEnded && Input.GetMouseButtonDown(0))
        {
            Debug.Log("Transition to new scene");

            transform.parent.gameObject.GetComponent<SceneController>().Toggle();

            //SceneManager.LoadScene("SecondScene", LoadSceneMode.Single);

            //twinePlayer.Story = twinePlayer.webs[1];

            //Instantiate(twinePlayer.secondPlayer, Vector3.zero, Quaternion.identity);
            //Destroy(gameObject);

            //twinePlayer.Story.Begin();
        }
    }
}
